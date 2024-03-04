package comment

import (
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
)

type Repository interface {
	CreateComment(content string , taskId uuid.UUID,userId uuid.UUID)( *models.Comment,error)
	GetAllComments(taskId uuid.UUID)([]models.Comment,error)
}