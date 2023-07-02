#include <iostream>

using namespace std;
int main()
{
    int arr[6] = {1, 1, 2, 2, 2, 8};
    int arr1[6];

    for(int a=0;a<6;a++)
    {
        cin >> arr1[a];
    }
    for(int b=0;b<6;b++)
    {
        cout << arr[b] - arr1[b] << " ";
    }

    return 0;
}