/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// var accountsMerge = function(accounts) { // Time: O(E^2) worst case, Space: O(E)
//     const emailToPerson = new Map();
//     const personToEmails = new Map();

//     for (let i = 0; i < accounts.length; i++) {
//         const acc = accounts[i];
//         let name = acc[0] + "," + i;

//         personToEmails.set(name, new Set());

//         for (let j = 1; j < acc.length; j++) {
//             const mail = acc[j];

//             if (emailToPerson.has(mail)) {
//                 const originalName = emailToPerson.get(mail);
//                 const currMails = personToEmails.get(name);

//                 if (originalName === name) continue;  // already in this group

//                 // Merge the current account's emails into the existing group.
//                 const originalMails = personToEmails.get(originalName);

//                 for (const email of currMails) {
//                     originalMails.add(email);
//                     emailToPerson.set(email, originalName);
//                 }

//                 personToEmails.delete(name);

//                 name = originalName;
//             } else {
//                 emailToPerson.set(mail, name);
//                 personToEmails.get(name).add(mail);
//             }
//         }
//     }

//     const res = [];

//     for (const [person, mails] of personToEmails) {
//         const emails = [...mails].sort();
//         const name = person.split(",")[0];

//         res.push([name, ...emails]);
//     }

//     return res;
// };

var accountsMerge = function(accounts) { // Time: O(Elog(E)) worst case, Space: O(E)
    const parents = new Map();
    const emailToPerson = new Map();

    function find(mail) {
        if (!parents.has(mail)) parents.set(mail, mail);

        if (parents.get(mail) !== mail) {
            parents.set(mail, find(parents.get(mail)));
        }

        return parents.get(mail);
    }

    function union(a, b) {
        const rootA = find(a);
        const rootB = find(b);

        if (rootA !== rootB) {
            parents.set(rootA, rootB);
        }
    }

    for (let i = 0; i < accounts.length; i++) {
        const acc = accounts[i];
        const firstEmail = acc[1];
        const person = acc[0];

        for (let j = 1; j < acc.length; j++) {
            const email = acc[j];

            emailToPerson.set(email, person);

            union(firstEmail, email);
        }
    }

    const groups = new Map();

    for (let mail of emailToPerson.keys()) {
        const root = find(mail);

        if (!groups.has(root)) groups.set(root, []);
        groups.get(root).push(mail);
    }

    const res = [];

    for (let root of groups.keys()) {
        const mails = groups.get(root);
        mails.sort();

        const name = emailToPerson.get(root);

        res.push([name, ...mails]);
    }

    return res;
};