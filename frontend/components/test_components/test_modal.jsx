// line starter stuff

// 'daw-09di-awid-0wiad-0 wodi aw-id -wai d-0a -0widawi d-wai dia-id-awidmawmd'

const lineStarter = (comment) => {
  let length = comment.length;
  let lines = comment.length / 50;
  let round = Math.floor(lines);

  let segments = (lines % 1 === 0) ? round : round + 1;
  let lineArray = [];
  let copyComment = comment;
  let position = 0;

  for (let i = 0; i < segments; i++) {
    let chunk = copyComment.slice(position, position + 50);
    lineArray.push(chunk);
    postion += chunk.length;
  };

  return lineArray;
}

// copyComment = copyComment.slice(51, copyComment.length);
