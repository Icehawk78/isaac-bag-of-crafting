  
import fs = require('fs');
import { BagOfCrafting } from './BagOfCrafting';
import { XmlParser } from './XmlParser';
import { Combinations } from './Combinations';

const _ = require('lodash');

const pools = XmlParser.loadPools(fs.readFileSync('assets/itempools.xml', 'utf8'));
const meta = XmlParser.loadMeta(fs.readFileSync('assets/items_metadata.xml', 'utf8'));
const bc = new BagOfCrafting(pools, meta);

const craftParts = {
  'b': {'name': 'Red Heart', 'id': 1},
  'c': {'name': 'Soul Heart', 'id': 2},
  'd': {'name': 'Black Heart', 'id': 2},
  'e': {'name': 'Eternal Heart', 'id': 2},
  'f': {'name': 'Golden Heart', 'id': 2},
  'g': {'name': 'Bone Heart', 'id': 2},
  'h': {'name': 'Rotten Heart', 'id': 2},
  'i': {'name': 'Penny', 'id': 2},
  'j': {'name': 'Nickel', 'id': 2},
  'k': {'name': 'Dime', 'id': 2},
  'l': {'name': 'Lucky Penny', 'id': 2},
  'm': {'name': 'Key', 'id': 2},
  'n': {'name': 'Golden Key', 'id': 2},
  'o': {'name': 'Charged Key', 'id': 2},
  'p': {'name': 'Bomb', 'id': 2},
  'q': {'name': 'Golden Bomb', 'id': 2},
  'r': {'name': 'Giant Bomb', 'id': 2},
  's': {'name': 'Mini Charge', 'id': 2},
  't': {'name': 'Full Charge', 'id': 2},
  'u': {'name': 'Giant Charge', 'id': 2},
  'v': {'name': 'Card', 'id': 2},
  'w': {'name': 'Pill', 'id': 2},
  'x': {'name': 'Rune', 'id': 2},
  'y': {'name': 'Dice Shard', 'id': 2},
  'z': {'name': 'Key Shard', 'id': 2},
}
// 'bbbbbbbb' to [1,1,1,1,1,1,1,1]
const asciiToNum = (s: string) => s.split('').map(c => craftParts[c]['id']).sort();

let inputs = 'bccijmpppqw';
let c = _.uniq(Combinations(asciiToNum(inputs), 8));

c.forEach(i => console.log(i, bc.calculate(i)));
