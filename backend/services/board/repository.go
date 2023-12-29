package board

import (
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
)

type Repository interface {
	CreateBoard(workspaceId uuid.UUID ,description string, name string) (*models.Board,error)
	GetBoards(workspaceId uuid.UUID) ([]models.Board,error)
	
}