export function paginate(data, currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = data.slice(startIndex, endIndex);

  return itemsToDisplay;
}

export function calculateTotalPages(data, itemsPerPage) {
  return Math.ceil(data.length / itemsPerPage);
}
