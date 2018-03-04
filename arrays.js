var chocolateBars=["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element)
{
  var new=[element,...array];
  return new;
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element)
{
  var new=[array,...element];
  return new;
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.push(element);
  return array;
}
