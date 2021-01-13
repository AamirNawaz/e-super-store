import _ from 'lodash';

const paginate = (dataArray, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(dataArray)
        .slice(startIndex)
        .take(pageSize)
        .value();
}

export default paginate;