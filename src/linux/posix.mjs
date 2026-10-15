/**
 * Linux POSIX Permissions, Signals & Filesystem Standards
 */

export function calculateOctal(r, w, x) {
  return (r ? 4 : 0) + (w ? 2 : 0) + (x ? 1 : 0);
}

export function formatPermissionString(userOctal, groupOctal, otherOctal) {
  const toRwx = (n) => {
    return [
      (n & 4) ? 'r' : '-',
      (n & 2) ? 'w' : '-',
      (n & 1) ? 'x' : '-'
    ].join('');
  };
  return `${toRwx(userOctal)}${toRwx(groupOctal)}${toRwx(otherOctal)}`;
}

export const SIGNALS = {
  SIGHUP: 1,
  SIGINT: 2,
  SIGQUIT: 3,
  SIGKILL: 9,
  SIGTERM: 15,
  SIGSTOP: 19
};

export function getSignalExitCode(signalName) {
  const sig = SIGNALS[signalName];
  if (!sig) return null;
  return 128 + sig;
}

export const FHS_DIRECTORIES = [
  '/',
  '/bin',
  '/boot',
  '/dev',
  '/etc',
  '/home',
  '/lib',
  '/media',
  '/mnt',
  '/opt',
  '/proc',
  '/root',
  '/run',
  '/sbin',
  '/srv',
  '/sys',
  '/tmp',
  '/usr',
  '/var'
];
