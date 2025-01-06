```javascript
//Correct usage of $in operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $match: {
      "field": {
        $in: ["value1","value2","value3"] //Quotes required for string values
      }
    }
  }
]);
```