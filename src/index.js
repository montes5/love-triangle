/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var sum = 0;
	for(i = 1; i <= preferences.length; i++) {
		if(preferences[preferences[preferences[i - 1] - 1] - 1] == i && preferences[i - 1] != i) sum++;
    }
	return sum/3;
};
