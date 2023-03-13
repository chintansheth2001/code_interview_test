
type Interest = {
  description: string
  ranking: number
}

type Test2Props = {
  id: string | number
  name: string
  description: string
  age?: number
  interests? : Interest[]
}
export const Test2 = ({id, name, description, age, interests }:Test2Props) => {
  return( 
  <>
    <dl>
      <dd>{id}</dd>
      <dd>{name}</dd>
      <dd>{description}</dd>
      {age ? <dd>{age.toString()}</dd> : null}
    </dl>
    {interests ? (
      interests.map( (interest) => {
        return(
          <div key={interest.ranking}>
            {interest.description}
          </div>
        )
      })
    ) : null}
  </>
  );
};
