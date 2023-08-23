## Task

Develop a simple application that sorts and filters data based on predefined rules. This application should work with lists of JSON objects with varying structures, enabling the filtering of objects containing specific key-value pairs and sorting objects based on values using a natural sorting order.

For instance, given the following data:

```json
{
	"data": [
		{ "name": "John", "email": "john2@mail.com" },
		{ "name": "John", "email": "john1@mail.com" },
		{ "name": "Jane", "email": "jane@mail.com" }
	]
}
```

If you set a condition like:

```json
{
	"condition": {
		"include": [{ "name": "John" }],
		"sortBy": ["email"]
	}
}
```

which includes two rules - `include` and `sortBy` (where `include` takes a set of key-value pairs for matching records and `sortBy` takes a set of keys for sorting), the result will be an object containing only entries with the name "John," sorted by the email key:

```json
{
	"result": [
		{ "name": "John", "email": "john1@mail.com" },
		{ "name": "John", "email": "john2@mail.com" }
	]
}
```

Furthermore, each filtering rule can have multiple conditions. For example, a rule built using "OR" logic:

```json
{
	"condition": {
		"exclude": [{ "name": "John" }, { "email": "john2@mail.com" }]
	}
}
```

In this case, users with either "name": "John" or "email": "john2@mail.com" will be excluded.

```json
{
	"result": [{ "name": "Jane", "email": "jane@mail.com" }]
}
```

Another option is a rule built using "AND" logic:

```json
{
	"exclude": [{ "name": "John", "email": "john2@mail.com" }]
}
```

This means users with both "name": "John" and "email": "john2@mail.com" will be excluded.

```json
{
	"result": [
		{ "name": "John", "email": "john1@mail.com" },
		{ "name": "Jane", "email": "jane@mail.com" }
	]
}
```

When designing the code structure of the application, ensure the possibility of expanding its functionality by adding new "modules" with rules. All modules should have identical structures, be isolated from one another and the main application code, and interact with the main code using a unified principle. For instance, you can add a new module with an exclude rule that discards entries containing specific values.

### Input Parameters

A JSON object with a list of data (`data`) and a processing condition (`condition`):

```json
{
	"data": [
		{ "user": "mike@mail.com", "rating": 20, "disabled": false },
		{ "user": "greg@mail.com", "rating": 14, "disabled": false },
		{ "user": "john@mail.com", "rating": 25, "disabled": true }
	],
	"condition": {
		"exclude": [{ "disabled": true }],
		"sortBy": ["rating"]
	}
}
```

### Output Data

A JSON object with data obtained after applying the processing condition (`result`):

```json
{
	"result": [
		{ "user": "greg@mail.com", "rating": 14, "disabled": false },
		{ "user": "mike@mail.com", "rating": 20, "disabled": false }
	]
}
```
