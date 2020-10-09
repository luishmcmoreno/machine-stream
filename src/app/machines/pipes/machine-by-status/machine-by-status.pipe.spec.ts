import { MachineByStatusPipe } from './machine-by-status.pipe';

describe('MachineByStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new MachineByStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
