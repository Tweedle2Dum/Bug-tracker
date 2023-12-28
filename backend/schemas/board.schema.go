package schemas

import "github.com/google/uuid"

type BoardSchema struct {
	Name  string `json:"name"`
	Description string `json:"description"`
	WorkspaceId uuid.UUID `json:"workspaceId"`
}