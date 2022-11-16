
interface Props{
  user: string | null
  currentProjectName: string | undefined
}

export const ProjectButton = ({
  user,
  currentProjectName = 'Select Project'}: Props
) => {
  return (
    <div className='project-button'>
      <p className='pb-acc-name'>{user}</p>
      <p className='pb-pjct-name'>{currentProjectName}</p>
    </div>
  )
}
