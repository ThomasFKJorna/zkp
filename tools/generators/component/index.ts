import {
  Tree,
  formatFiles,
  installPackagesTask,
  names,
  generateFiles,
  joinPathFragments,
  getProjects,
} from '@nrwl/devkit'
import { componentGenerator } from '@nrwl/react/src/generators/component/component'
import { Schema } from './schema'

import { componentStoryGenerator } from '@nrwl/react/src/generators/component-story/component-story'
import { getDirectory } from './getDirectory'
import { join } from 'path'

interface NormalizedSchema extends Schema {
  projectSourceRoot: string
  fileName: string
  className: string
  styledModule: null | string
  hasStyles: boolean
}

export default async function (tree: Tree, schema: Schema) {
  const { className, fileName } = names(schema.name)
  const componentFileName = schema.fileName ?? (schema.pascalCaseFiles ? className : fileName)
  // const project = getProjects(tree).get(schema.project);
  const sourceDir = await getDirectory(tree, schema)

  const path = `${join(sourceDir, componentFileName)}.tsx`

  const project = getProjects(tree).get(schema.project)

  const componentDir = joinPathFragments(project?.sourceRoot || '', sourceDir)

  await componentGenerator(tree, schema)
  await componentStoryGenerator(tree, {
    project: schema.project,
    componentPath: path,
  })

  generateFiles(tree, join(__dirname, 'files'), componentDir, { componentFileName })

  await formatFiles(tree)

  return () => {
    installPackagesTask(tree)
  }
}
