/**
 * The Learning Hub - Linux Systems Administration, Kernel Internals & SRE Roadmap
 */

export const LINUX_STAGES = [
  {
    stageNumber: 1,
    title: "Operating System Architecture & Boot Sequence",
    domainFocus: "UEFI/BIOS, GRUB2, Linux kernel initialization, systemd init (PID 1), system targets & units",
    completed: true,
    keyTopics: ["UEFI to GRUB2 Boot Chain", "Kernel Space vs User Space", "systemd Unit Dependency Graphs", "systemctl & journalctl"]
  },
  {
    stageNumber: 2,
    title: "The Linux Filesystem Hierarchy & VFS Architecture",
    domainFocus: "Filesystem Hierarchy Standard (FHS), Virtual File System (VFS), Inodes, hard vs symbolic links, ext4/XFS",
    completed: true,
    keyTopics: ["FHS Directory Structure", "Inode Table Exhaustion", "VFS Abstraction Layer", "Mount Options & /etc/fstab"]
  },
  {
    stageNumber: 3,
    title: "POSIX Permissions, Access Control Lists & Capabilities",
    domainFocus: "Read/Write/Execute (rwx) octal triplets, umask, SUID/SGID/Sticky bits, Linux Capabilities (cap_net_bind_service)",
    completed: true,
    keyTopics: ["Octal Permission Triplet Math", "Sticky Bit on /tmp", "SELinux / AppArmor Mandatory Access", "Granular Linux Capabilities"]
  },
  {
    stageNumber: 4,
    title: "Process Scheduling, Memory & Kernel Signals",
    domainFocus: "Process table, fork/execve lifecycle, CFS scheduler, cgroups v2, virtual memory & OOM Killer, POSIX signals",
    completed: true,
    keyTopics: ["Kernel Signal Traps (SIGTERM vs SIGKILL)", "Fatal Signal Exit Offsets (128+N)", "Virtual Memory Pages & Swap", "OOM Killer Score Badness"]
  },
  {
    stageNumber: 5,
    title: "Linux Networking Stack & Socket Architecture",
    domainFocus: "TCP/IP socket states, epoll I/O multiplexing, iptables/nftables, network namespaces, ss, tcpdump, eBPF",
    completed: true,
    keyTopics: ["epoll Edge vs Level Triggered", "nftables Packet Filtering", "Network Namespaces for Containers", "eBPF Kernel Probing (kprobes/uprobes)"]
  },
  {
    stageNumber: 6,
    title: "Storage Management: LVM, RAID & Block Devices",
    domainFocus: "Logical Volume Manager (PV, VG, LV), dynamic partition resizing, software RAID (mdadm), ZFS storage pools",
    completed: true,
    keyTopics: ["LVM Thin Provisioning & Snapshots", "RAID 0/1/5/10 Invariants", "blockdev & lsblk I/O tuning", "I/O Schedulers (mq-deadline, bfq)"]
  },
  {
    stageNumber: 7,
    title: "Staff Linux Systems Architect Interview Handbook",
    domainFocus: "40+ staff scenario Q&As, kernel panic crash forensics, zombie process reaping, catastrophic filesystem corruption",
    completed: true,
    keyTopics: ["kdump / crash Forensics", "Init PID 1 Zombie Reaping", "High Load Average with Low CPU (Disk D-state)", "Enterprise SRE Runbook"]
  }
];

export function getCompletedCount() {
  return LINUX_STAGES.filter(s => s.completed).length;
}

export function getProgressPercentage() {
  return Math.round((getCompletedCount() / LINUX_STAGES.length) * 100);
}
