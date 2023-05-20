from rest_framework.permissions import BasePermission
from rest_framework import permissions


# this adds authentication for only the creators of /foods endpoint
# allows access to FoodList only for the creator of that food list
class IsCreatorOrReadOnly(BasePermission):
    """
    Custom permission to only allow the creator of the data to edit and delete it.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the creator of the data.
        return obj.created_by == request.user
    

    
