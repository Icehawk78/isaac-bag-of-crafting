export const Combinations = <T>(set: T[], k?: number) => {
    if (k === null) {
      k = set.length;
    }
  
    if (k > set.length || k <= 0) {
        return [];
    }

    if (k === set.length) {
        return [set];
    }

    if (k === 1) {
        return set.reduce((acc, cur) => [...acc, [cur]], [] as T[][]);
    }

    const combs = [] as T[][];
    let tail_combs = [];

    for (let i = 0; i <= set.length - k + 1; i++) {
        tail_combs = k_combinations(set.slice(i + 1), k - 1);
        for (let j = 0; j < tail_combs.length; j++) {
            combs.push([set[i], ...tail_combs[j]]);
        }
    }

    return combs;
};
