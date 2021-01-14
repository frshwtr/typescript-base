import { Rover } from "../main/rover";

describe("Mars Rover", () => {
  it("should always start the rover at position 0:0:N", () => {
    const rover = new Rover();

    expect(rover.getPosition()).toBe("0:0:N");
  });

  it("should move the robot when given input 'M'"),
    () => {
      const rover = new Rover();
      rover.execute("M");
      expect(rover.getPosition()).toBe("0:1:N");
    };
});
