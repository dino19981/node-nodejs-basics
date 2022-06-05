export const parseEnv = () => {
  const allEnvs = Object.entries(process.env);
  const rssEnv = allEnvs
    .filter(([envName, _]) => envName.substr(0, 4) === 'RSS_')
    .map(([envName, envValue]) => `${envName}=${envValue}`)
    .join('; ');
  console.log(rssEnv);
};
parseEnv();
