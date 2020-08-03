interface Cards {
	cards: [{
		ability: [];
		artist: string;
		attacks: [];
		convertedRetreatCost: number;
		evolvesFrom: string;
		hp: string;
		id: string;
		imageUrl: string;
		imageUrlHiRes: string;
		name: string;
		nationalPokedexNumber: number;
		number: string;
		rarity: string;
		resistances: [];
		retreatCost: string[];
		series: string;
		set: string;
		setCode: string;
		subtype: string;
		supertype: string;
		text: string[];
		types: string[];
		weaknesses: [];
	}]
}

export { Cards };
