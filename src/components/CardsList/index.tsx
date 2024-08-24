import { ReactNode } from 'react'
import { Grid } from '@chakra-ui/react'

interface CardsListProps {
  children: ReactNode
}

export function CardsList({ children }: CardsListProps) {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)'
      }}
      gap='5'
    >
      {children}
    </Grid>
  )
}
