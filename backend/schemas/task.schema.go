package schemas

import "github.com/google/uuid"

type TaskSchema struct {
	Name        string    `json:"name"`
	Description string    `json:"description"`
	ColumnID    uuid.UUID `json:"column_id"`
}