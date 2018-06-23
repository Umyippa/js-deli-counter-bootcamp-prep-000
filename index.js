var katzDeli = [];
var otherDeli = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to be served!"
  }
  
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if(!line.length) {
    return "The lined is currently empty."
  }
  const nAndN = []
  
  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }
}