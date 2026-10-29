import { firebaseDb } from '../firebase/config'
import {
    addDoc,
    collection,
    getDocs,
    limit,
    query,
    updateDoc,
    where,
    type FirestoreDataConverter,
    type PartialWithFieldValue,
    type QueryDocumentSnapshot,
    type SetOptions,
    type SnapshotOptions,
    type WithFieldValue,
} from 'firebase/firestore'

interface UserRecord {
    uid: string
    email: string
    firstName: string
    lastName: string
}

function serializeUser(user: WithFieldValue<User>): WithFieldValue<UserRecord>
function serializeUser(user: PartialWithFieldValue<User>, options: SetOptions): PartialWithFieldValue<UserRecord>
function serializeUser(user: PartialWithFieldValue<User>) {
    const record: PartialWithFieldValue<UserRecord> = {}
    if (user.uid !== undefined) record.uid = user.uid
    if (user.email !== undefined) record.email = user.email
    if (user.firstName !== undefined) record.firstName = user.firstName
    if (user.lastName !== undefined) record.lastName = user.lastName
    return record
}

class User {
    constructor(
        public id: string,
        public uid: string,
        public email: string,
        public firstName: string,
        public lastName: string,
    ) {
    }

    toString() {
        return this.firstName + ' ' + this.lastName
    }
}

const userConverter: FirestoreDataConverter<User, UserRecord> = {
    toFirestore: serializeUser,
    fromFirestore: (snapshot: QueryDocumentSnapshot<UserRecord>, options: SnapshotOptions) => {
        const data = snapshot.data(options)
        return new User(snapshot.id, data.uid, data.email, data.firstName, data.lastName)
    },
}

async function getUser(uid: string) {
    const userCollection = collection(firebaseDb, 'user')

    const userQuery = query(userCollection, where('uid', '==', uid), limit(1)).withConverter(userConverter)
    const querySnapshot = await getDocs(userQuery)

    if (querySnapshot.docs.length > 0) {
        return querySnapshot.docs[0].data()
    }
    else {
        return null
    }
}

async function updateUser(uid: string, firstName: string, lastName: string) {
    const userCollection = collection(firebaseDb, 'user')

    const userQuery = query(userCollection, where('uid', '==', uid), limit(1)).withConverter(userConverter)
    const querySnapshot = await getDocs(userQuery)

    if (querySnapshot.docs.length > 0) {
        const existingUser = querySnapshot.docs[0]
        await updateDoc(existingUser.ref, {
            firstName: firstName,
            lastName: lastName,
        })
    }
}

async function createUser(uid: string, firstName: string, lastName: string, email: string) {
    const userCollection = collection(firebaseDb, 'user')

    const existingUser = await getUser(uid)
    if (!existingUser) {
        const newUser: UserRecord = {
            uid: uid,
            firstName: email,
            lastName: lastName,
            email: email,
        }
        const userRef = (await addDoc(userCollection, newUser)).withConverter(userConverter)

        return userRef
    }
    else {
        return existingUser
    }
}

export {
    getUser,
    updateUser,
    createUser,
}
