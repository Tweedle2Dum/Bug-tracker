package schemas
import "github.com/google/uuid"



type ColumnSchema struct {
	Name string `json:"name"`
	BoardId uuid.UUID `json:"boardId"`
}