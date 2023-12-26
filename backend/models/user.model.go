package models

import "github.com/google/uuid"

type User struct {
	ID         uuid.UUID  `gorm:"primaryKey;type:uuid;default:uuid_generate_v4()" json:"id"`
	Email      string      `gorm:"unique;not null" json:"email"`
	CreatedAt  int         `json:"created_at"`
	UpdatedAt  int         `json:"updated_at"`
	Name       string      `json:"name"`
	Workspaces []Workspace `gorm:"many2many:user_workspaces;" json:"workspaces"`
}
