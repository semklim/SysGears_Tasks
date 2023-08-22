## Task

Develop an application for converting between units of distance with support for both the metric and imperial measurement systems. You can take the conversion ratios from the [table](https://en.wikipedia.org/wiki/Imperial_and_US_customary_measurement_systems#Units_of_length) provided. Initially, the application should recognize meters (m), centimeters (cm), inches (in), and feet (ft), and support conversion between any of these units of measurement.

Additionally, you need to implement the ability to expand the list of supported units by defining conversion rules using a JSON file. The JSON file format is up to you. As an example, expand your application by adding values for millimeters (mm), yards (yd), and kilometers (km) to the file.

#### Input Parameters:

A JSON object containing the distance to be converted (distance) with a value (value) and a unit scale (unit), as well as the designation of the target unit of measurement for the conversion (convertTo), for instance:

```
{"distance": {"unit": "m", "value": 0.5}, "convertTo": "ft"}
```

#### Output Data:

A JSON object containing the obtained distance value, rounded to two decimal places, and the corresponding unit of measurement, for example:

```
{"unit": "ft", "value": 1.64}
```
