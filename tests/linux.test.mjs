import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('Linux POSIX Permissions & Octal Logic', () => {
  function calculateOctal(r, w, x) {
    return (r ? 4 : 0) + (w ? 2 : 0) + (x ? 1 : 0);
  }

  it('correctly calculates octal permission triplets', () => {
    assert.equal(calculateOctal(true, true, true), 7); // rwx
    assert.equal(calculateOctal(true, false, true), 5); // r-x
    assert.equal(calculateOctal(true, true, false), 6); // rw-
    assert.equal(calculateOctal(true, false, false), 4); // r--
    assert.equal(calculateOctal(false, false, false), 0); // ---
  });

  it('validates standard hardened file modes', () => {
    const privateKey = [calculateOctal(true, true, false), calculateOctal(false, false, false), calculateOctal(false, false, false)];
    assert.equal(privateKey.join(''), '600');

    const script = [calculateOctal(true, true, true), calculateOctal(true, false, true), calculateOctal(true, false, true)];
    assert.equal(script.join(''), '755');
  });
});

describe('Linux Kernel Signals & Exit Codes', () => {
  const SIGNALS = {
    SIGHUP: 1,
    SIGINT: 2,
    SIGQUIT: 3,
    SIGKILL: 9,
    SIGTERM: 15,
    SIGSTOP: 19,
  };

  it('verifies standard POSIX signal numbers', () => {
    assert.equal(SIGNALS.SIGKILL, 9);
    assert.equal(SIGNALS.SIGTERM, 15);
    assert.equal(SIGNALS.SIGHUP, 1);
    assert.equal(SIGNALS.SIGINT, 2);
  });

  it('calculates fatal signal exit code offset (128 + signal)', () => {
    const exitOnSigkill = 128 + SIGNALS.SIGKILL;
    const exitOnSigterm = 128 + SIGNALS.SIGTERM;
    assert.equal(exitOnSigkill, 137);
    assert.equal(exitOnSigterm, 143);
  });
});

describe('Linux Filesystem Hierarchy Standard (FHS)', () => {
  const FHS_DIRECTORIES = [
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
    '/var',
  ];

  it('contains all essential POSIX root directories', () => {
    assert.ok(FHS_DIRECTORIES.includes('/etc'));
    assert.ok(FHS_DIRECTORIES.includes('/proc'));
    assert.ok(FHS_DIRECTORIES.includes('/sys'));
    assert.ok(FHS_DIRECTORIES.includes('/var'));
    assert.ok(FHS_DIRECTORIES.includes('/tmp'));
  });
});
