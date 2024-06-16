import { TaskStatus } from '@/types'
import { Badge } from './ui/badge'

export const Task: React.FC<{ status: TaskStatus; content: string }> = ({
  status,
  content,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-background p-4">
      <p>{content}</p>
      <Badge className="self-end">{status}</Badge>
    </div>
  )
}
