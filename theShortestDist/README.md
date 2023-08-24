### Task

In a certain part of space, there is an immobile asteroid with a unique mineral. A new type of simple disposable probe has been developed to accurately locate it. These probes, when activated once, determine the exact distance from themselves to the asteroid.

Your task is to write a function that will set the activation coordinates for the probes. Given the distances from each probe to the asteroid, the function should find the asteroid's coordinates while using the fewest number of probes.

For simplification, let's assume that the region of space where the rare asteroid is located and where the probes can be launched is bounded by an imaginary cube with dimensions 100x100x100. The coordinates of the asteroid and the probes can only be integers from 0 to 100.

### Input Parameters

To choose the asteroid's coordinates, you need to write a function that generates a random location for the asteroid, denoted as a(x, y, z). Additionally, prepare a separate function that, given the coordinates of a probe, will return the distance between the probe and point a.

### Output Data

As a result, the program should return the asteroid's coordinates (`location`), the number of used probes (`probes.count`), and their coordinates (`probes.coordinates`):

```json
{
  "result": {
    "location": {"x": 34, "y": 50, "z": 60},
    "probes": {
      "count": 44,
      "coordinates": [{"x": 10, "y": 9, "z": 21}, ..., {"x": 10, "y": 4, "z": 11}]
    }
  }
}
```
