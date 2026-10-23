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

var accountsMerge = function(accounts) { // Time: O(E^2) worst case, Space: O(E)
    const emailToPerson = new Map();
    const personToEmails = new Map();

    for (let i = 0; i < accounts.length; i++) {
        const acc = accounts[i];
        let name = acc[0] + "," + i;

        personToEmails.set(name, new Set());

        for (let j = 1; j < acc.length; j++) {
            const mail = acc[j];

            if (emailToPerson.has(mail)) {
                const originalName = emailToPerson.get(mail);
                const currMails = personToEmails.get(name);

                if (originalName === name) continue;  // already in this group

                // Merge the current account's emails into the existing group.
                const originalMails = personToEmails.get(originalName);

                for (const email of currMails) {
                    originalMails.add(email);
                    emailToPerson.set(email, originalName);
                }

                personToEmails.delete(name);

                name = originalName;
            } else {
                emailToPerson.set(mail, name);
                personToEmails.get(name).add(mail);
            }
        }
    }

    const res = [];

    for (const [person, mails] of personToEmails) {
        const emails = [...mails].sort();
        const name = person.split(",")[0];

        res.push([name, ...emails]);
    }

    return res;
};