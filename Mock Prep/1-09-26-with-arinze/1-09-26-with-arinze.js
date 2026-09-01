/**
 * In this problem, each process has a unique **PID (process id)** and **PPID (parent process id)**.
Each process only has one parent process, but may have one or more children processes. This is just like a tree structure. 
Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.
We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains
the corresponding PPID.
Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. 
You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.
    
TEST CASE 1:
pid = [1, 2, 3, 4, 5]
ppid = [0, 1, 1, 2, 2]
kill = 4
result = [4]

            0
            1
        2       3
    4       5

TEST CASE 2:
pid = [1, 2, 3, 4, 5, 6]
ppid = [0, 1, 1, 2, 2, 3]
kill = 2
result = [2,4,5]

0: [1]
1: [2,3]
2: [4, 5]
3: [6]
4: []
5: []
6: []


Input: array of processes

Output: array or processes killed

Edge cases: 

Thought: find root to kill, then find process that are its chidren, and find its gradchildren if it exists and add to the result; 
dfs

Time: O(v + e) / O(h)
Space: O(v)
 */

/**
 * Signal Areas 
1. coding - 3 
2. speed - 2
3. communication - 4
4. DSA - 3
5. testing  - 5

---------
Tree and Graph
- binary tree 
- tree one directional | DAG
- dfs(kill) - returns the result
 */

const killProcess = (pid, ppid, kill) => {
    const result = [];
    const graph = toGraph(pid, ppid);

    dfs(graph, result, kill);

    return result;
}

// pid = [1, 2, 3, 4, 5, 6]
// ppid = [0, 1, 1, 2, 2, 3]

// 0: [1]
// 1: [2,3]
// 2: [4, 5]
// 3: [6]
// 4: []
// 5: []
// 6: []

function dfs(graph, result, kill) {
    result.push(kill);

    for (let child of graph[kill]) {
        dfs(graph, result, child);
    }

    return;
}

function toGraph(pid, ppid) {
    const graph = {};

    for (let i = 0; i < ppid.length; i++) {
        const procP = ppid[i];
        const procC = pid[i];

        if (!(procP in graph)) {
            graph[procP] = [];
        }

        if (!(procC in graph)) {
            graph[procC] = [];
        }

        graph[procP].push(pid[i])
    }

    return graph;
}


const pid = [1, 2, 3, 4, 5, 6]
const ppid = [0, 1, 1, 2, 2, 3]
const kill = 2
// result = [4]

console.log(killProcess(pid, ppid, kill));


