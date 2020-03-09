// transformText(string)
//   .then(str => allCaps(str))
//   .then(str => trimFirst(str))
//   .then(str => trimLast(str))
//   .then(str => replaceWithX(str))
//   .then(str => {
//     console.log(str);
//     return str;
//   })
//   .catch(err => console.log(err));

const transformText = async string => {
  try {
    const str = await allCaps(string);
    const str2 = await trimFirst(str);
    const str3 = await trimLast(str2);
    const str4 = await replaceWithX(str3);
    console.log(str4);
    return await str4;
  } catch (error) {
    console.log(error);
  }
};

transform("hello");
