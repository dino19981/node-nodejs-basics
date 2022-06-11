export const parseArgs = () => {
  let str = '';
  const args = process.argv.slice(2);
  const result = args.forEach((arg, ind) => {
    if (arg.substring(0, 2) === '--') {
      str += arg.substring(2) + ' is ';
    } else {
      if (ind === args.length - 1) {
        str += arg + '.';
      } else {
        str += arg + ', ';
      }
    }
  });
  console.log(str);
};
parseArgs();
