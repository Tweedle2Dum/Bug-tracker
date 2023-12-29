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

func (r *repo) GetBoards(workspaceId uuid.UUID) ([]models.Board,error) {
	var boards []models.Board
	err := r.DB.Where("workspace_id = ?",workspaceId).Find(&boards).Error
	if err != nil {
		return nil, err
	}
	return boards , nil
	
}