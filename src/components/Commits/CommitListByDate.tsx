import React from 'react'
import { Commit } from './Commit'
import { SlimCommit } from '../../api'
import { Container, Divider, VStack } from '@chakra-ui/layout'

interface Props {
  commits: SlimCommit[]
}

export const CommitListByDate = (props: Props) => {
  const { commits } = props
  return (
    <VStack
      py={3}
      borderRadius="lg"
      borderColor="grey.700"
      borderWidth={1}
      divider={<Divider color="gray.500" />}
      spacing={2}
      w="100%"
      display="flex"
      alignItems="flex-start"
    >
      {commits.reverse().map((commit: SlimCommit) => {
        return <Commit {...{ ...commit }} key={commit.oid} />
      })}
    </VStack>
  )
}
