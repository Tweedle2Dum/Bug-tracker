package schemas

import "github.com/google/uuid"


type CommentSchema struct {
	TaskId uuid.UUID `json:"taskId"`
	Text string `json:"description"`

}