package board

import (
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
	"gorm.io/gorm"
)

type repo struct {
	DB *gorm.DB
}


func NewPostgresRepo(db *gorm.DB) Repository {
	return &repo {
		DB: db,
	}
}

func (r *repo) CreateBoard(workspaceId uuid.UUID , name string , description string) (*models.Board,error){
	newBoard := &models.Board{
		WorkspaceID: workspaceId,
		Name: name,
		Description: description,
	}
	err:= r.DB.Create(&newBoard).Error
	if err != nil {
		return nil, err
	}
	return newBoard,nil
}