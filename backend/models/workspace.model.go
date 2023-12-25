package models

import "github.com/google/uuid"

type Workspace struct {
	ID          uuid.UUID `gorm:"primaryKey;type:uuid;default:uuid_generate_v4()" json:"id"`
	CreatedAt   int       `json:"created_at"`
	UpdatedAt   int       `json:"updated_at"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Boards      []Board   `json:"boards"`
}