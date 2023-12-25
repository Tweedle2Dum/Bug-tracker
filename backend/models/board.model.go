package models

import "github.com/google/uuid"

type Board struct {
	ID          uuid.UUID `gorm:"primaryKey;type:uuid;default:uuid_generate_v4()" json:"id"`
	CreatedAt   int       `json:"created_at"`
	UpdatedAt   int       `json:"updated_at"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	WorkspaceID uuid.UUID `json:"workspace_id"`
	 // Relationship: A board can have multiple columns
	 Columns []Column `json:"columns"`
}
