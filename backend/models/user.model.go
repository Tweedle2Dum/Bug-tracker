package models


type User struct {
	Email     string    `gorm:"primaryKey;not null" json:"email"`
	CreatedAt int       `json:"created_at"`
	UpdatedAt int       `json:"updated_at"`
	Name      string    `json:"name"`
    Workspaces []Workspace `gorm:"many2many:user_workspaces;" json:"workspaces"`}
