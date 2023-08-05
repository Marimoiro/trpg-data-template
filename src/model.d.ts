
export interface Detail {
  key: string;
  title: string;
  value: string;
}

export interface Effect {
  //name	ruby		maxLv	timing	skill	difficult	target	range	cost	limit	flavor	game をstringで持つ
  id : string;
  name: string;
  ruby: string;
  maxLv: string;
  timing: string;
  skill: string;
  difficult: string;
  target: string;
  range: string;
  cost: string;
  limit: string;
  flavor: string;
  game: string;


}

export interface Droyce {
  //id	name	ruby	short	description	game をstringで持つ
  id : string;
  name: string;
  ruby: string;
  short: string;
  description: string;
  game: string;


}

export interface Item {
  // id	name	ruby	category	type	timing	skill	hit	attack	guard	range	dogde	move	armor	fullmove	exp	flavor	game
  id : string;
  name: string;
  ruby: string;
  category: 'general' | 'armor' | 'weapon' | 'wiggle';
  type: string;
  timing: string;
  skill: string;
  hit: string;
  attack: string;
  guard: string;
  range: string;
  dogde: string;
  initiative: string;
  armor: string;
  fullmove: string;
  exp: string;
  flavor: string;
  game: string;
}
