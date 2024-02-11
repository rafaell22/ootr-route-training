import { 
  readdir, 
  readFile,
  rename, 
  writeFile,
} from 'fs/promises';

const inputPath = './data/input/';

const file = {
  read: {},
  write: null,
  rename: null,
};

file.rename = async (oldName, newName, path) => {
  try {
    await rename(`${path.replace(/\/$/, '')}/${oldName}`, `${path.replace(/\/$/, '')}/${newName}`);
  } catch (errorRenamingFile) {
    console.log('Error renaming file!');
    throw errorRenamingFile;
  }
};

file.write = async (fileName, data, path) => {
  try {
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    await writeFile((path || inputPath) + fileName, data, 'UTF-8');
  } catch (errorWritingFile) {
    console.log('Error writing json file!');
    throw errorWritingFile;
  }
}

file.read.json = async (fileName, path) => {
  let jsonData;
  try {
    jsonData = await readFile((path || inputPath) + fileName + '.json', 'UTF-8');
    jsonData = JSON.parse(jsonData);
  } catch (errorReadingFile) {
    console.log('Error reading json file!');
    throw errorReadingFile;
  }

  return jsonData;
}

file.read.prj = async (fileName, path) => {
  let prjData;
  try {
    prjData = await readFile((path || inputPath) + fileName + '.prj', 'UTF-8');
  } catch (errorReadingFile) {
    console.log('Error reading prj file!');
    throw errorReadingFile;
  }

  return prjData;
}

file.read.geojson = async (fileName, path) => {
  let geojsonData;
  try {
    geojsonData = await readFile((path || inputPath) + fileName + '.geojson', 'UTF-8');
    geojsonData = JSON.parse(geojsonData);
  } catch (errorReadingFile) {
    console.log('Error reading geojson file!');
    throw errorReadingFile;
  }

  return geojsonData;
}

file.read.all = async (path) => {
  const files = await readdir(path);
  
  return files;
}

file.read.any = async (fileName, path) => {
  let data;
  try {
    data = await readFile((path || inputPath) + fileName, 'UTF-8');
  } catch (errorReadingFile) {
    console.log('Error reading file!');
    throw errorReadingFile;
  }

  return data;
}

export default file;
