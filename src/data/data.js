const notes = new Array(15)
    .fill(1)
    .map((_, index) => ({ id: Date.now(), title: `Note ${index}` }));

module.exports = notes;
