import React from 'react'
import { Card } from '@chakra-ui/react'
import { Avatar } from './components/ui/avatar'

const characters = [
  { id: 1, name: "Rick Sanchez", species: "Human", status: "Alive" },
  { id: 2, name: "Morty Smith", species: "Human", status: "Alive" },
  { id: 3, name: "Summer Smith", species: "Human", status: "Alive" },
  { id: 4, name: "Beth Smith", species: "Human", status: "Alive" },
  { id: 5, name: "Jerry Smith", species: "Human", status: "Alive" },
  { id: 6, name: "Abadango Cluster Princess", species: "Alien", status: "Alive" },
  { id: 7, name: "Abradolf Lincler", species: "Human", status: "Unknown" },
  { id: 8, name: "Adjudicator Rick", species: "Human", status: "Dead" },
  { id: 9, name: "Agency Director", species: "Human", status: "Dead" },
  { id: 10, name: "Alan Rails", species: "Human", status: "Dead" },
  { id: 11, name: "Albert Einstein", species: "Human", status: "Dead" },
  { id: 12, name: "Alexander", species: "Human", status: "Dead" },
  { id: 13, name: "Alien Googah", species: "Alien", status: "Unknown" },
  { id: 14, name: "Alien Morty", species: "Alien", status: "Unknown" },
  { id: 15, name: "Alien Rick", species: "Alien", status: "Unknown" },
  { id: 16, name: "Amish Cyborg", species: "Alien", status: "Dead" },
  { id: 17, name: "Annie", species: "Human", status: "Alive" },
  { id: 18, name: "Antenna Morty", species: "Human", status: "Alive" },
  { id: 19, name: "Antenna Rick", species: "Human", status: "Unknown" },
  { id: 20, name: "Ants in my Eyes Johnson", species: "Human", status: "Unknown" },
]

const CharacterCard = ({id, name, species, status}) => (
  <Card.Root width="520px" margin="30px">
      <Card.Body gap="2">
        <Avatar
          boxSize="200px"
          marginLeft="130px"
          src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
          
        />
        <Card.Title mt="2" textAlign='center' fontSize='23px' fontWeight='semibold'>{name}</Card.Title>
        <Card.Description color='white' fontSize='17px' textAlign="center">
          Species: {species}
          <br />
          Status: {status}
        </Card.Description>
      </Card.Body>
    </Card.Root>
)

const App = () => {
  return (
    <div>
      
      <div className='flex flex-wrap max-w-[1800px] justify-center'>
        {characters.map((character) => (
            <CharacterCard key={character.id} {...character}/>
        ))}
      </div>
    </div>
  )
}

export default App