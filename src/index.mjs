import { calculateOctal, formatPermissionString, SIGNALS, getSignalExitCode, FHS_DIRECTORIES } from './linux/posix.mjs';
import { LINUX_STAGES, getCompletedCount, getProgressPercentage } from './roadmap.mjs';

console.log('======================================================');
console.log('  The Learning Hub - Linux Systems Architecture & SRE');
console.log('======================================================');
console.log('Kernel: Linux Monolithic Kernel & POSIX Standard (IEEE 1003.1)');
console.log('Init System: systemd Process Orchestrator (PID 1)\n');

// 1. POSIX Permissions
console.log('--- 1. POSIX File Permission Modes & Octal Representation ---');
const modes = [
  { desc: 'SSH Private Key', u: [true, true, false], g: [false, false, false], o: [false, false, false] },
  { desc: 'Executable Script', u: [true, true, true], g: [true, false, true], o: [true, false, true] },
  { desc: 'Web Document', u: [true, true, false], g: [true, false, false], o: [true, false, false] }
];

modes.forEach(m => {
  const uOct = calculateOctal(...m.u);
  const gOct = calculateOctal(...m.g);
  const oOct = calculateOctal(...m.o);
  const octalStr = `${uOct}${gOct}${oOct}`;
  const permStr = formatPermissionString(uOct, gOct, oOct);
  console.log(`  ${m.desc.padEnd(20)}: ${octalStr} (-${permStr})`);
});

// 2. Kernel Signals & Exit Codes
console.log('\n--- 2. Linux Kernel Signals & Fatal Exit Offsets (128 + Signal) ---');
Object.entries(SIGNALS).forEach(([sigName, sigNum]) => {
  const exitCode = getSignalExitCode(sigName);
  console.log(`  Signal ${sigName.padEnd(10)} (#${sigNum.toString().padStart(2)}) -> Fatal Process Exit Code: ${exitCode}`);
});

// 3. Filesystem Hierarchy Standard (FHS)
console.log('\n--- 3. Filesystem Hierarchy Standard (FHS) Core Mounts ---');
console.log(`  Standard Root Directories: ${FHS_DIRECTORIES.slice(0, 10).join(', ')}... (+${FHS_DIRECTORIES.length - 10} more)\n`);

// 4. 7-Stage Pedagogical Roadmap
console.log('--- 4. 7-Stage Linux Systems Masterclass Roadmap ---');
for (const stage of LINUX_STAGES) {
  const icon = stage.completed ? '[OK]' : '[..]';
  console.log(` ${icon} Stage ${stage.stageNumber}: ${stage.title}`);
  console.log(`      Focus: ${stage.domainFocus}`);
  console.log(`      Topics: ${stage.keyTopics.join(', ')}`);
}

const completed = getCompletedCount();
const percent = getProgressPercentage();
console.log('------------------------------------------------------');
console.log(`Progress: ${completed}/7 Stages Complete (${percent}%)`);
console.log('======================================================\n');
