  
import fs = require('fs');
import { BagOfCrafting } from './BagOfCrafting';
import { XmlParser } from './XmlParser';
import { Combinations } from './Combinations';

const _ = require('lodash');

const pools = XmlParser.loadPools(fs.readFileSync('assets/itempools.xml', 'utf8'));
const meta = XmlParser.loadMeta(fs.readFileSync('assets/items_metadata.xml', 'utf8'));
const bc = new BagOfCrafting(pools, meta);

interface Hash<T> {
  [key: string]: T;
}

interface CraftItem {
  name: string;
  id: number;
}

const craftParts: Hash<CraftItem> = {
  'b': {'name': 'Red Heart', 'id': 1},
  'c': {'name': 'Soul Heart', 'id': 2},
  'd': {'name': 'Black Heart', 'id': 3},
  'e': {'name': 'Eternal Heart', 'id': 4},
  'f': {'name': 'Golden Heart', 'id': 5},
  'g': {'name': 'Bone Heart', 'id': 6},
  'h': {'name': 'Rotten Heart', 'id': 7},
  'i': {'name': 'Penny', 'id': 8},
  'j': {'name': 'Nickel', 'id': 9},
  'k': {'name': 'Dime', 'id': 10},
  'l': {'name': 'Lucky Penny', 'id': 11},
  'm': {'name': 'Key', 'id': 12},
  'n': {'name': 'Golden Key', 'id': 13},
  'o': {'name': 'Charged Key', 'id': 14},
  'p': {'name': 'Bomb', 'id': 15},
  'q': {'name': 'Golden Bomb', 'id': 16},
  'r': {'name': 'Giant Bomb', 'id': 17},
  's': {'name': 'Mini Charge', 'id': 18},
  't': {'name': 'Full Charge', 'id': 19},
  'u': {'name': 'Giant Charge', 'id': 20},
  'v': {'name': 'Card', 'id': 21},
  'w': {'name': 'Pill', 'id': 22},
  'x': {'name': 'Rune', 'id': 23},
  'y': {'name': 'Dice Shard', 'id': 24},
  'z': {'name': 'Key Shard', 'id': 25},
}
// 'bbbbbbbb' to [1,1,1,1,1,1,1,1]
const asciiToNum = (s: string) => s.split('').map(c => craftParts[c]['id']).sort();

let inputs = 'bccijmpppqw';
let c: number[][] = _.uniq(Combinations(asciiToNum(inputs), 8));

c.forEach(i => console.log(i, bc.calculate(i)));
