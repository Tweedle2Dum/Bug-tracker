package models

import "github.com/google/uuid"

type Task struct {
    ID        uuid.UUID `gorm:"primaryKey;type:uuid;default:uuid_generate_v4()" json:"id"`
    Name      string    `json:"name"`
    ColumnID  uuid.UUID `json:"column_id"`

    // Relationship: A task can have multiple comments
    Comments []Comment `json:"comments"`
}